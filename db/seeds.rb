# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#gem install pg -- --with-pg-config=/usr/local/bin/pg_config
ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

Inspection.destroy_all

15.times do |t|
  Inspection.create(
    date_performed: Time.zone.now + t.days,
    vin: rand(999999),
    technician_id: rand(99)
  )
end
