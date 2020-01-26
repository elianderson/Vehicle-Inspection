json.array! @inspections do |inspection|
  json.partial! 'inspection', locals: { inspection: inspection }
end
