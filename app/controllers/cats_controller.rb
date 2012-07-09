class CatsController < ApplicationController
  def info
  	@cats = Cat.all
  	render 'info'
  end
end
