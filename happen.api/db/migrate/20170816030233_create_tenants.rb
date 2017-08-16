class CreateTenants < ActiveRecord::Migration[5.0]
  def change
    create_table :tenants do |t|
      t.datetime :created_at
      t.datetime :updated_at
      t.string :name
      t.string :code

      t.timestamps
    end
  end
end
