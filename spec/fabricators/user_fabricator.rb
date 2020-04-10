require 'securerandom'

Fabricator(:user) do
  first_name { Faker::Name.first_name }
  last_name { Faker::Name.last_name }
  email { Faker::Internet.email }
  password { SecureRandom.urlsafe_base64 }
  created_at { Time.zone.now }
  updated_at { Time.zone.now }
end
