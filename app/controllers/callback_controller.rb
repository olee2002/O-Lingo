class CallbackController < ApplicationController
    def index
      @test = "ttedt"
      render json: @test
    end
  
  end
  