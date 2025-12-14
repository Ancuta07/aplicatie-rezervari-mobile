import { useNavigation } from "@react-navigation/native";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    Platform,
    StatusBar,
    ScrollView,
} from "react-native";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebase/firebaseConfig";

const sfLogo = require("../../../assets/images/sf1.png");

export default function Header() {
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await signOut(FIREBASE_AUTH);
        } catch (error) {
            console.log("Logout error:", error);
        }
    };

    return (
        <View style={styles.container}>
            {/* LOGO + TITLU */}
            <View style={styles.left}>
                <Image source={sfLogo} style={styles.logo} />
                <View>
                    <Text style={styles.titleTop}>Salon</Text>
                    <Text style={styles.titleBottom}>Finder</Text>
                </View>
            </View>

            {/* NAV SCROLLABIL */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.nav}
            >
                <Pressable onPress={() => navigation.navigate("Saloane")}>
                    <Text style={styles.link}>Saloane</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("Rezervari")}>
                    <Text style={styles.link}>Rezervări</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("Despre")}>
                    <Text style={styles.link}>Despre</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("Harta")}>
                    <Text style={styles.link}>Hartă</Text>
                </Pressable>

                {/* LOGOUT */}
                <Pressable onPress={handleLogout}>
                    <Text style={styles.logout}>Logout</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop:
            Platform.OS === "android" ? StatusBar.currentHeight + 8 : 12,
        paddingBottom: 10,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        elevation: 6,
        flexDirection: "row",
        alignItems: "center",
    },

    left: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 12,
    },

    logo: {
        width: 36,
        height: 36,
        borderRadius: 8,
        marginRight: 6,
    },

    titleTop: {
        fontSize: 14,
        fontWeight: "700",
        color: "#7a57d1",
        lineHeight: 16,
    },

    titleBottom: {
        fontSize: 18,
        fontWeight: "900",
        color: "#7a57d1",
        lineHeight: 18,
    },

    nav: {
        alignItems: "center",
        gap: 18,
        paddingRight: 10,
    },

    link: {
        fontSize: 14,
        fontWeight: "600",
        color: "#7a57d1",
    },

    logout: {
        fontSize: 14,
        fontWeight: "700",
        color: "#d11a2a", // roșu pentru acțiune critică
    },
});
