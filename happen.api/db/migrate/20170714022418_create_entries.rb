# create Entries table
class CreateEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :entries do |t|
      t.string :title
      t.string :summary

      t.timestamps
    end
  end
end
