import React, { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";

import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { View } from "react-native";
3;
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state,
    //state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <Spacer>
        <Input
          value={state.name}
          onChangeText={changeName}
          placeholder="Enter Track Name"
        />
      </Spacer>
      <Spacer>
        {state.recording ? (
          <Button title="Stop Recording" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!state.recording && state.locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </View>
  );
};

export default TrackForm;
