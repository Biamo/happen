# Api
class Api
  # Entry Resource
  class EntryResource < JSONAPI::Resource
    attributes :title, :summary
  end
end
