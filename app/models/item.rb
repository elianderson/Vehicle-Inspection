class Item < ApplicationRecord
  belongs_to :area
  enum condition: { bad: 0, ok: 1, good: 2 }

  def detail_keys
    self.class.local_stored_attributes&.dig(:details) || {}
  end
end
