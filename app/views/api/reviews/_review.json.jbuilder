json.extract! review, :id, :author_id, :car_id, :rating, :title, :body

json.fName "#{review.author.fname}"