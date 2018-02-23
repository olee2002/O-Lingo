class Language < ApplicationRecord
    has_many :lessons, dependent: :destroy
    has_many :users, through: :lessons
end
