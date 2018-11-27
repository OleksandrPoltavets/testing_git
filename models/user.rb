class User < ActiveRecord::Base
  attr_reader :first_name, :last_name, :email

  validates_uniqueness_of :email
  has_secure_password

  has_many :memberships
  has_many :groups, through: :memberships

  def full_name
    "#{first_name} #{last_name}"
  end
end