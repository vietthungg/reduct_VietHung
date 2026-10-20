// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from '../store/counterSlice';
// import { RootState } from '../store';

// export default function CounterScreen() {
//   const dispatch = useDispatch();
  
//   const counter = useSelector((state: RootState) => state.counter.value);

//   return (
//     <View >
//       <Text>Counter</Text>
//       <Text>{counter}</Text>
//       <View>
//         <TouchableOpacity onPress={() => dispatch(decrement())}>
//           <Text>- Giảm</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => dispatch(increment())}>
//           <Text>+ Tăng</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

