import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './atyles';

type Props= {
    name: string;
    onRemove: () => void;
}

export function Participant({name, onRemove}: Props){

    function handleParticipantRemove(){

    }

    return (
<View style = {styles.container}>
    <Text style = {styles.name}>
        { name }
    </Text>

    <TouchableOpacity style={styles.button} onPress={onRemove}>
      <Text style={styles.buttonText}>
        -
      </Text>
    </TouchableOpacity>
</View>
    )
}