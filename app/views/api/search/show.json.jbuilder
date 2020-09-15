@imaginations.each do |imagination| 
    # debugger
    json.set! imagination.id do 
        json.extract! imagination, :id, :title, :description
        json.image url_for(imagination.image) 
    end 
end 