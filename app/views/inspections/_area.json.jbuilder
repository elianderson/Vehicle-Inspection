json.id area.id
json.name area.name
json.items_attributes(area.items) do |item|
  json.partial! 'item', locals: { item: item }
end
