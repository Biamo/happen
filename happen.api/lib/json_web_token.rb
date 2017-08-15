# generate json toke
class JsonWebToken
  class << self
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
    end
  end
end
