class Api::LessonsController < ApplicationController
  def index
    # @lessons = Language.find(params[:language_id]).lessons
    @lessons = Lesson.all
    render json: @lessons 
  end

  def create

  @lessons = Lesson.create!( lesson_params )

    render json: @lessons
  end

  private

  def lesson_params
    params.require(:lesson).permit(:title, :audio, :question, :answer,:user_id, :language_id)
  end
end
