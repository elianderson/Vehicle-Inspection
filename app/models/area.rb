class Area < ApplicationRecord
  belongs_to :inspection
  has_many :items

  accepts_nested_attributes_for :items, allow_destroy: true
end
