json.id inspection.id
json.vin inspection.vin
json.notes inspection.notes
json.date_performed inspection.date_performed
json.technician_id inspection.technician_id
json.areas(inspection.areas) do |area|
  json.partial! 'area', locals: { area: area }
end
