const FS = require('fs')
;

import { OaiPmh } from 'oai-pmh'

//http://nycma.lunaimaging.com/luna/servlet/oai?verb=ListIdentifiers&metadataPrefix=oai_dc&set=NYCMA~6~6



async function main () {
  var S = []
    const oaiPmh = new OaiPmh('http://nycma.lunaimaging.com/luna/servlet/oai')
  const identifierIterator = oaiPmh.listIdentifiers({
    metadataPrefix: 'oai_dc',
    from: '2018-11-01',
    until: '2019-01-04'
  })
  for await (const identifier of identifierIterator) {
   S.push(identifier)
 }

 FS.writeFile('/tmp/nycma.txt',JSON.stringify(S),(e,d)=>{
  if(e){console.log(e)}
})

}

main().catch(console.error);



