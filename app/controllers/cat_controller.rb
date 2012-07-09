class CatController < ApplicationController
  def info
  	@cat = Cats.find(1)
  	render 'info'
  	p "testdesu!!!!!!!!!!!!!!!!"
  end
end
