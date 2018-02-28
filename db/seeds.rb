# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Language.destroy_all
Lesson.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
  end


  olee = User.create!(username: 'oleelove', firstname: 'Ok-Hyun', lastname: 'Lee', location:'atlanta', img_url: 'https://avatars2.githubusercontent.com/u/31643464?s=460&v=4')
korean = Language.create!(name: 'Korean', location: 'Korea', img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_South_Korea_%28Pantone%29.svg/2000px-Flag_of_South_Korea_%28Pantone%29.svg.png')
hello = Lesson.create!(title: 'Hello', audio:"https://www.youtube.com/embed/zaPXbdo2Qq4", question:'hello', answer:'안녕하세요', user:olee, language:korean)
seeyou = Lesson.create!(title: 'See you', audio:"https://www.youtube.com/embed/A3buqlKuJJc", question:'see you!', answer:'나중에 봐요!', user:olee, language:korean)
thankyou = Lesson.create!(title: 'Thank you', audio:"https://www.youtube.com/embed/Cyi38F9P8z4", question:'Thank you!', answer:'감사합니다!', user:olee, language:korean)

italian = Language.create!(name: 'Italian', location: 'Italy', img_url: 'https://www.theflagshop.co.uk/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/i/t/italy-flag-8x5.gif')
hello = Lesson.create!(title: 'Hello', audio:"https://www.youtube.com/embed/dJ2AiodDhNI", question:'hello', answer:'ciao', user:olee, language:italian)

chinese = Language.create!(name: 'Chinese', location: 'China', img_url: 'https://www.theflagshop.co.uk/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/i/t/italy-flag-8x5.gif')
hello = Lesson.create!(title: 'Hello', audio:"https://www.youtube.com/embed/7mkC29XFyVo", question:'hello', answer:'你好', user:olee, language:chinese)