class Item < ApplicationRecord
  belongs_to :area

  def detail_keys
    self.class.local_stored_attributes&.dig(:details) || {}
  end
end
