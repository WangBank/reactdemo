const qin = 'qin'
const wang = 'wang'

export function counter(state=20,action){
  switch (action.type) {
    case qin:
      return state+1      
    case wang:
        return state-1
    default:
      return 10
  }
}

export function addPerson(){
  return {type:qin}
}
export function leavePerson(){
  return {type:wang}
}