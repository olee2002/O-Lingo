class User < ApplicationRecord
    has_many :lessons, dependent: :destroy
    has_many :languages, through: :lessons
end
