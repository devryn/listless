class User < ApplicationRecord
  has_many :lists
  has_many :tasks, through: :lists

  validates :name, presence: true
  validates :email, presence: true
end
