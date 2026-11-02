// 3D-робот для первого экрана. Собран в коде из простых 3D-форм (Three.js):
// вытянутый тёмный шлем, синее стеклянное «лицо», светящиеся кольца, пучок кабелей и броня плеч.
// Робот следит за курсором, на визоре бегает световая полоса, кольца медленно вращаются.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export function mountRobot(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.7;

  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 100);
  camera.position.set(0, 0.6, 8.8);
  camera.lookAt(0, 0.45, 0);

  // --- Материалы ---
  const metal = new THREE.MeshPhysicalMaterial({ color: 0x17191f, metalness: 0.85, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.12 });
  const darkMetal = new THREE.MeshPhysicalMaterial({ color: 0x0c0d11, metalness: 0.7, roughness: 0.45 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0x9aa3b2, metalness: 1, roughness: 0.2 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x1f8fff, metalness: 0.15, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.03,
    emissive: 0x0a4fae, emissiveIntensity: 0.35,
  });
  const glow = new THREE.MeshBasicMaterial({ color: 0x6fdcff });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x111216, metalness: 0.2, roughness: 0.55 });

  const robot = new THREE.Group();
  const head = new THREE.Group();
  robot.add(head);
  head.position.y = 0.9;
  head.rotation.order = 'YXZ';

  // --- Голова: вытянутый вперёд шлем ---
  const HEAD = new THREE.Vector3(0.8, 0.95, 1.4);
  const shell = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 128), metal);
  shell.scale.copy(HEAD);
  head.add(shell);

  // Синее стеклянное лицо: отдельный глянцевый овал, выступающий из шлема спереди.
  // Пересечение двух форм даёт плавную изогнутую границу, как у настоящего визора.
  const visor = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 128), glass);
  visor.scale.set(0.72, 0.8, 1.2);
  visor.position.set(0, -0.08, 0.42);
  head.add(visor);

  // Светящаяся полоса «взгляда» на визоре
  const scan = new THREE.Mesh(new THREE.TorusGeometry(1, 0.008, 8, 128, 1.5), glow);
  scan.rotation.set(Math.PI / 2, 0, Math.PI / 2 - 0.75);
  scan.scale.set(0.725, 1.205, 1);
  scan.position.set(0, -0.02, 0.42);
  head.add(scan);

  // Гребень на макушке
  const crest = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 1.5, 8, 24), metal);
  crest.rotation.x = Math.PI / 2;
  crest.position.set(0, 0.99, -0.1);
  head.add(crest);

  // Боковые модули с кольцами подсветки
  const rings: THREE.Mesh[] = [];
  for (const side of [-1, 1]) {
    const ear = new THREE.Group();
    ear.position.set(side * 0.74, 0.05, -0.35);
    ear.rotation.z = (side * Math.PI) / 2;
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.4, 0.2, 96), darkMetal);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.29, 0.24, 96), metal);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.29, 0.012, 12, 128), glow);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = side * -0.12;
    const inner = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.008, 8, 96, Math.PI * 1.5), glow);
    inner.rotation.x = Math.PI / 2;
    inner.position.y = side * -0.125;
    ear.add(disc, cap, ring, inner);
    rings.push(inner);
    head.add(ear);
    // Маленькие огоньки на щеке
    for (let i = 0; i < 3; i++) {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.025, 12, 12), glow);
      dot.position.set(side * 0.7, -0.35 + i * 0.07, 0.1);
      head.add(dot);
    }
  }

  // Две антенны-стержня назад
  for (const [y, len] of [[0.35, 1.4], [-0.15, 1.1]] as const) {
    const rod = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, len, 24), darkMetal);
    const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.16, 24), chrome);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.012, 8, 32), glow);
    tip.position.y = len / 2;
    band.position.y = len / 2 - 0.18;
    band.rotation.x = Math.PI / 2;
    rod.add(body, tip, band);
    rod.position.set(-0.45, y, -0.95);
    rod.rotation.set(-1.25, 0, 0.45);
    rod.translateY(len / 2);
    head.add(rod);
  }

  // Нижняя часть головы
  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 64), darkMetal);
  jaw.scale.set(1, 0.6, 1.3);
  jaw.position.set(0, -0.78, -0.1);
  head.add(jaw);

  // --- Шея: позвоночник из сегментов ---
  const neck = new THREE.Group();
  neck.position.set(0, 0.0, -0.25);
  robot.add(neck);
  for (let i = 0; i < 7; i++) {
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.12, 48), i % 2 ? darkMetal : chrome);
    seg.position.y = -i * 0.16;
    neck.add(seg);
    if (i % 2) {
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.235, 0.01, 8, 64), glow);
      r.rotation.x = Math.PI / 2;
      r.position.y = -i * 0.16;
      neck.add(r);
    }
  }

  // Пучок кабелей от затылка вниз, как у киборга
  let seed = 7;
  const rand = (a: number, b: number) => {
    seed = (seed * 16807) % 2147483647;
    return a + ((seed - 1) / 2147483646) * (b - a);
  };
  for (let i = 0; i < 22; i++) {
    const x0 = rand(-0.35, 0.35);
    const z0 = rand(-0.75, 0.05);
    const start = new THREE.Vector3(x0, 0.35, z0);
    const mid = new THREE.Vector3(x0 * 1.6 + rand(-0.15, 0.15), -0.6, z0 - rand(0.1, 0.45));
    const end = new THREE.Vector3(x0 * 3 + rand(-0.3, 0.3), -2.6, z0 + rand(-0.2, 0.5));
    const curve = new THREE.CatmullRomCurve3([start, mid, end]);
    robot.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, rand(0.03, 0.06), 12), rubber));
    if (i % 3 === 0) {
      const at = rand(0.25, 0.6);
      const p = curve.getPointAt(at);
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.014, 8, 24), glow);
      band.position.copy(p);
      band.lookAt(p.clone().add(curve.getTangentAt(at)));
      robot.add(band);
    }
  }

  // --- Броня плеч, уходит за нижний край экрана ---
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.14, 32, 96), metal);
  collar.rotation.x = Math.PI / 2;
  collar.position.set(0, -1.3, -0.2);
  robot.add(collar);
  const torso = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 128), metal);
  torso.scale.set(1.9, 0.9, 1.15);
  torso.position.set(0, -2.25, -0.2);
  robot.add(torso);
  // Синяя стеклянная вставка на горле
  const throat = new THREE.Mesh(new THREE.SphereGeometry(1, 96, 96), glass);
  throat.scale.set(0.2, 0.5, 0.2);
  throat.position.set(0, -0.4, -0.08);
  robot.add(throat);

  robot.rotation.y = -1.15; // в профиль, смотрит влево — на текст
  robot.position.y = 0.1;
  scene.add(robot);

  // --- Свет: основной, синий контровой и заполняющий ---
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(-3, 4, 5);
  scene.add(key);
  const rim = new THREE.PointLight(0x3aa0ff, 60, 20);
  rim.position.set(3.5, 1.5, -3);
  scene.add(rim);
  const fill = new THREE.PointLight(0x8fc4ff, 15, 20);
  fill.position.set(2, -1, 4);
  scene.add(fill);

  // --- Размер холста ---
  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(canvas);
  resize();

  // --- Следим за курсором ---
  const target = { x: 0, y: 0 };
  window.addEventListener('pointermove', (e) => {
    target.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.y = (e.clientY / window.innerHeight) * 2 - 1;
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let visible = true;
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(canvas);

  const clock = new THREE.Clock();
  function frame() {
    const t = clock.getElapsedTime();
    head.rotation.y += (target.x * 0.35 - head.rotation.y) * 0.05;
    head.rotation.x += (target.y * 0.15 - 0.22 - head.rotation.x) * 0.05; // голова чуть приподнята
    robot.position.y = 0.1 + Math.sin(t * 0.8) * 0.04;
    for (const r of rings) r.rotation.z = t * 0.6;
    scan.position.y = 0.12 + Math.sin(t * 1.4) * 0.22;
    glow.color.setHSL(0.54, 1, 0.66 + Math.sin(t * 2) * 0.06);
    renderer.render(scene, camera);
  }

  if (reduceMotion) {
    frame();
    return;
  }
  renderer.setAnimationLoop(() => {
    if (visible) frame();
  });
}
