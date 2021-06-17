const Database = require('../DataBaseConnection');
const {UserInfo}=Database;


  


const AddNewUser = async (data) => {

    if (data == null) {
        await add(DemoData, UserInfo);
    
    } else {
        return await add(data, UserInfo);
    }
}


const add = async (data, Modal) => {

    const {username,email} = data;
  
    try{
        const item= await Modal.find({ username,email })
      
        if(item!==null){
            return null;
        }

        let document =  new Modal(data);

        return await document.save();

    }catch(e){
      
        return null;
    }
}



const GetUserList = async () => {


    try {
        const data = await UserInfo.find({});
        return data;
    } catch {
        return 'Error';
    }

}



const GetOneUserInformationById = async (id) => {

    try {

        const data = await UserInfo.findOne({
            _id:id
        });
        return data;
    } catch {
        return 'Error';
    }

}

const GetOneUserInformationByEmail = async (id) => {

    try {

        const data = await UserInfo.findOne({
            email:id
        });
        return data;
    } catch {
        return 'Error';
    }

}



const GetUserAndUpDate = async (filter, Update) => {

    const {
        _id
    } = filter;


    try {
        const doc = await UserInfo.findOne({
            _id
        });

        return await UserInfo.update({ _id: doc._id }, { ...Update });

      
    } catch {
        return 'Error'
    }
}




const AddLikeArray = async (id,name) => {
    try {
        const doc = await UserInfo.findOne({
            _id:id
        });
        
        doc.LikePage.includes(name)
        ?
        doc.LikePage=doc.LikePage.filter((data)=>data!==name)
        :
        doc.LikePage.push(name)

        const ans=doc.LikePage;
        
        return await UserInfo.update({ name: doc.name }, { LikePage: ans });
        

    } catch {
        return 'Error'
    }
    
}

exports.add = add;
exports.AddLikeArray = AddLikeArray;
exports.AddNewUser = AddNewUser;
exports.GetUserList = GetUserList;
exports.GetUserAndUpDate  = GetUserAndUpDate ;
exports.GetOneUserInformationById  = GetOneUserInformationById ;
exports.GetOneUserInformationByEmail  = GetOneUserInformationByEmail ;
