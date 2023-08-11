import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import {connectToDb} from '@components/'
import User from '@modals/user'
console.log("clientId :", process.env.GOOGLE_ID ,"client secret :",  process.env.GOOGLE_SECRET);

const handler = NextAuth({
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_SECRET,
        }),
    ],
    async session({session}){
        const sessionUser = await User.findOne({
            email : session.user.email
        })

        session.user.id = sessionUser._id.toString();
    },
    async signIn ( {profile} ){
        try{
            await connectToDb();

            const userExists = await User.findOne({
                email : profile.email
            });

            if(!userExists){
                await User.create({
                    email : profile.email,
                    username: profile.name.replace(" ", "").towLowerCase(),
                    image : profile.picture
                })
            }
            // check if a user already exists

            // if not , create a new user

            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }
})


export { handler as GET, handler as POST };
