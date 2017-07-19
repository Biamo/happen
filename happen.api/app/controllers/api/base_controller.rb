class Api::BaseController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_request
  attr_reader :current_user

  rescue_from StandardError do |exception|
    render_error(500, 'Server Error', exception)
  end

  def bearer_token
    pattern = /^Bearer /
    header  = request.env["HTTP_AUTHORIZATION"]
    header.gsub(pattern, '') if header && header.match(pattern)
  end

  attr_reader :current_user

  def authenticate_request
    return render_401('Missing token') if bearer_token.blank?

    @current_user = AuthorizeApiRequest.call(request.headers).result
    render_401 'Unauthorized' unless @current_user
  end


  def render_401(title)
    response.headers['WWW-Authenticate'] = 'Bearer realm="Self Driving API"'
    render_error 401, title
  end

  def render_error(code, title, exception = nil)
    message = { title: title, status: code }

    if Rails.env.development? && exception
      message[:exception] = {
        class: exception.class.to_s,
        message: exception.message,
        backtrace: exception.backtrace
      }
    end

    render json: message, status: code
  end

  def encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def decode(token)
    body = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
    HashWithIndifferentAccess.new body
    rescue JWT::DecodeError => e
      puts "Invalid JWT: #{e.message}"
      render_error 400, 'Invalid token'
  end
end
