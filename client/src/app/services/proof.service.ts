import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProofService {

  constructor() { }

  public async generateProof(
    root: string,
    nullifierHash: string,
    nullifier: string,
    secretHash: string,
    pathElements: string[],
    pathIndex: string[]
  ): Promise<any> {
    console.log('generate Proof params', root, nullifierHash, nullifier, secretHash, pathElements, pathIndex)

    root = '7278042928854248020889790183665591093978050476263144988506401172678301507811'
    nullifierHash = '1878270344728378459515485669877507670953948900983725124577143697005479393724'
    nullifier = '279451245587828634319141964613642756480406259450296310473449197412836590053'
    secretHash = '158272764195863212608952447122997478115477199482990178618439493316192225999'
    pathElements = ['405135121003412691836120379851803642830215575700464153385812701625454276460', '187956699723699636159206637205368511391406482338278258191765138492265521949', '144140184405306870173633513849055491028485009482126760911503070999501390336', '32016556084226519312313875369887784900593535017542217993958489748161641435', '243455219527399096546331160377910126824487032159520531117859365994968995785']
    pathIndex = ['0', '0', '0', '0', '0']

    let params = {
      root: root,
      nullifierHash: nullifierHash,
      nullifier: nullifier,
      secret: secretHash,
      pathElements: pathElements,
      pathIndex: pathIndex
    }

    console.log('params after object', params)

    return await (window as any).witness(params)
  }
}
