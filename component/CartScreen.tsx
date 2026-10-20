import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import { RootState } from '../store';

export default function CartScreen() {
  const dispatch = useDispatch();
  
  const cartItems = useSelector((state: RootState) => state.cart.items);


  const handleAddSampleProduct = () => {
    dispatch(addToCart({
      id: Date.now(), 
      name: 'Laptop Gaming ASUS',
      price: 1200,
    }));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Giỏ Hàng Của Tôi</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>

            <View style={styles.quantityContainer}>
              <TouchableOpacity 
                style={styles.qtyBtn} 
                onPress={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
              >
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantityNum}>{item.quantity}</Text>

              <TouchableOpacity 
                style={styles.qtyBtn} 
                onPress={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
              >
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={styles.deleteBtn} 
              onPress={() => dispatch(removeFromCart(item.id))}
            >
              <Text style={styles.deleteText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Giỏ hàng của bạn đang trống!</Text>
        }
      />

      <View style={styles.totalBox}>
        <Text style={styles.totalText}>Tổng tiền: ${totalPrice}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddSampleProduct}>
          <Text style={styles.buttonText}>+ Thêm Sản Phẩm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={() => dispatch(clearCart())}>
          <Text style={styles.buttonText}>🗑️ Xóa Giỏ Hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#28a745',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginRight: 15,
  },
  qtyBtn: {
    backgroundColor: '#e9ecef',
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityNum: {
    fontSize: 16,
    fontWeight: '600',
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  deleteText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 40,
    fontSize: 16,
  },
  totalBox: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },
  addButton: {
    flex: 1,
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#6c757d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});