# Entry Model
class Entry < ApplicationRecord
  ### Validations
  validates :title, presence: true
  validates :summary, presence: true
end
