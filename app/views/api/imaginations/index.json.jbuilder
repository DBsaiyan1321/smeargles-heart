@imaginations.each do |imagination| 
    json.set! imagination.id do 
        json.extract! imagination, :id, :title, :description, :artist_id
        # json.image url_for(imagination.image)
    end 
end 