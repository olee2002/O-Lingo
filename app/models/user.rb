class User < ApplicationRecord
    has_many :lessons, dependent: :destroy
    has_many :languages, through: :lessons

    validates :username, length: { minimum: 2 }
    validates :location, length: { maximum: 500 }
    validates :image_url, length: { in: 6..20 }
    validates :firstname, length: { is: 6 }
    validates :lastname, length: { is: 6 }

end