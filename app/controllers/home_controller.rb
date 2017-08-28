class HomeController < ApplicationController

  def index
    render_html
  end

  private
  def render_html
    respond_to do |format|
      format.html
    end
  end
end
