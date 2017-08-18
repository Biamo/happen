# Api Controller
class Api
  # Entries Controller
  class EntriesController < Api::BaseController
    include JSONAPI::ActsAsResourceController
  end
end
