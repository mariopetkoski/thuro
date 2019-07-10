# == Schema Information
#
# Table name: rentals
#
#  id         :bigint           not null, primary key
#  renter_id  :integer          not null
#  car_id     :integer          not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rental < ApplicationRecord
end
