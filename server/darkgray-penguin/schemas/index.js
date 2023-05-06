import user from './user'
import pin from './pin'
import save from './save'
import comment from './comment'
import postedBy from './postedBy'
// wont find it in a schema cz it's a reference to another schema aka user

export const schemaTypes = [user, pin,comment, postedBy, save]
