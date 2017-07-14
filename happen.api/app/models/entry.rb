class Entry < ApplicationRecord
  
  ### Validations
  validates :name_first, presence: true
  validates :name_last, presence: true
end
