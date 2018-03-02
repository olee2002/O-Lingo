class Api::LanguagesController < ApplicationController
  def index
    @languages = Language.all
    render json: @languages.reverse
  end
end
