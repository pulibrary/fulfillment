class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable

  def to_s
    username
  end

  def self.find_for_cas(access_token, _signed_in_resource = nil)
    logger.debug access_token.inspect.to_s

    @user = User.where(provider: access_token.provider, uid: access_token.uid)
                .first_or_create do |user|
      user.uid = access_token.uid
      user.username = access_token.uid
      user.email = "#{access_token.uid}@princeton.edu"
      user.password = Devise.friendly_token[0, 20]
      user.provider = access_token.provider
    end
    @user
  end
end
