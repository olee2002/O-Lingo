class Api::LessonsController < ApplicationController
  def index
    # @lessons = Language.find(params[:language_id]).lessons
    @lessons = Lesson.all
    render json: @lessons 
  end

  def create

  @lesson = Lesson.create!( lesson_params )

    render json: @lesson
  end

  def update
    @lesson = Lesson.find(params[:id])
    @lesson.update!(lesson_params)

    render json: @lesson
  end

  def destroy
    @lesson = Lesson.find(params[:id]).delete

    render status: :ok
  end

  private

  def lesson_params
    params.require(:lesson).permit(:title, :audio, :question, :answer,:user_id, :language_id)
  end
end
