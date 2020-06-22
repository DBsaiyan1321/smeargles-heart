@imaginations.each do |imagination| 
    # debugger
    json.set! imagination.id do 
        json.extract! imagination, :id, :title
        json.image url_for(imagination.image) 
    end 
end 