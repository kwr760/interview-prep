export const solution = (n, m) => {
  let head, current;
  if (n && m) {
    if (m.data > n.data) {
      head = current = n;
      n = n.next;
    } else {
      head = current = m;
      m = m.next;
    }
  } else if (n) {
    head = current = n;
    n = n.next;
  } else if (m) {
    head = current = m;
    m = m.next;
  }
  while (n && m) {
    let next;
    if (m.data > n.data) {
      next = n;
      n = n.next;
    } else {
      next = m;
      m = m.next;
    }
    current.next = next;
    current = next;
  }

  while (n) {
    current.next = n;
    current = n;
    n = n.next;
  }
  while (m) {
    current.next = m;
    current = m;
    m = m.next;
  }
  return head;
}
