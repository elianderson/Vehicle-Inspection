json.id item.id
json.name item.name
json.condition item.condition
json.type item.type.underscore

item.detail_keys&.map do |detail|
  json.merge! "#{detail}" => item.public_send(detail)
end
