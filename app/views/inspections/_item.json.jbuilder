json.name item.name
json.condition item.condition

item.detail_keys&.map do |detail|
  json.merge! "#{detail}" => item.public_send(detail)
end
