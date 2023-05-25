function removeContentHash(fileName){
  if(fileName?.includes(".[contenthash:8]")){
      
    fileName=fileName.split(".[contenthash:8].")
    fileName=fileName.join(".")
    return fileName
  }
  else return false
}

module.exports = function override(config, env) {
    let fileName=config?.output?.filename||""
    fileName=removeContentHash(fileName,config)
    if(fileName){
      config.output.filename=fileName
    }
    fileName=config?.output?.chunkFilename||""
    fileName=removeContentHash(fileName,config)
    if(fileName){
      config.output.chunkFilename=fileName
    }
    let {plugins}=config
    // console.log(JSON.stringify(plugins))
    for(let item of plugins){
      fileName=item?.options?.filename||""
      fileName=removeContentHash(fileName)
      if(fileName){
        item.options.filename=fileName
      }
      fileName=item?.options?.chunkFilename||""
      fileName=removeContentHash(fileName)
      if(fileName){
        item.options.chunkFilename=fileName
      }
    }
    
    return config;
    
  }