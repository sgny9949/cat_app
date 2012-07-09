#coding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Cat.create(:title => 'maru01', :img_name => 'maru01.png', :url => 'http://www.youtube.com/v/z_AbfPXTKms?version=3&feature=player_detailpage')
Cat.create(:title => 'maru02', :img_name => 'maru02.png', :url => 'http://www.youtube.com/v/VUKnAXyw3kM?version=3&feature=player_detailpage')
Cat.create(:title => 'maru03', :img_name => 'maru03.png', :url => 'http://www.youtube.com/v/IJJ8_qNELqw?version=3&feature=player_detailpage')
