class CallbackController < ApplicationController
    def index
     @tests='test'
     render json:@tests
    end
  end
  