"use client"

import React, { useReducer, useState, useEffect } from 'react';
import { Mail, Lock, Building2, User, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import "./index.css"

type AuthMode = 'login' | 'signup';

interface AuthState {
  mode: AuthMode;
  formData: {
    name: string;
    email: string;
    workEmail: string;
    orgName: string;
    password: string;
  };
  errors: Record<string, string>;
  isSubmitting: boolean;
}

type AuthAction = 
  | { type: 'TOGGLE_MODE' }
  | { type: 'SET_FIELD'; field: string; value: string }
  | { type: 'SET_ERRORS'; errors: Record<string, string> }
  | { type: 'START_SUBMIT' }
  | { type: 'END_SUBMIT' };

const initialState: AuthState = {
  mode: 'signup',
  formData: {
    name: '',
    email: '',
    workEmail: '',
    orgName: '',
    password: '',
  },
  errors: {},
  isSubmitting: false,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'TOGGLE_MODE':
      return { ...initialState, mode: state.mode === 'login' ? 'signup' : 'login' };
    case 'SET_FIELD':
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: '' }
      };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'START_SUBMIT':
      return { ...state, isSubmitting: true };
    case 'END_SUBMIT':
      return { ...state, isSubmitting: false };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Real-time Monitoring",
      desc: "Track your deployments across global clusters with millisecond precision.",
      icon: <Zap className="text-yellow-400" size={48} />,
      img: "https://csspicker.dev/api/image/?q=dashboard+analytics&image_type=illustration"
    },
    {
      title: "Enterprise Security",
      desc: "Bank-grade encryption and automated compliance for your organization.",
      icon: <ShieldCheck className="text-blue-400" size={48} />,
      img: "https://csspicker.dev/api/image/?q=security+network&image_type=illustration"
    },
    {
      title: "Global Infrastructure",
      desc: "Deploy to 50+ regions instantly with our automated edge network.",
      icon: <Globe className="text-purple-400" size={48} />,
      img: "https://csspicker.dev/api/image/?q=world+connection&image_type=illustration"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const { email, password, workEmail, orgName, name } = state.formData;

    if (state.mode === 'signup') {
      if (!name) newErrors.name = 'Name is required';
      if (!orgName) newErrors.orgName = 'Organization name is required';
      if (!workEmail || !workEmail.includes('@')) newErrors.workEmail = 'Valid work email required';
    }

    if (email && !email.includes('@')) newErrors.email = 'Enter a valid email';

    if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors: validationErrors });
      return;
    }

    dispatch({ type: 'START_SUBMIT' });
    await new Promise(resolve => setTimeout(resolve, 1500));
    dispatch({ type: 'END_SUBMIT' });
    alert(`${state.mode === 'login' ? 'Logged in' : 'Account created'} successfully!`);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans overflow-hidden">
      {/* Left Side: Form */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 overflow-y-auto">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Zap className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {state.mode === 'signup' ? 'Create your account' : 'Welcome back'}
            </h2>
            <p className="text-gray-500">
              {state.mode === 'signup' 
                ? 'Join 10,000+ teams monitoring their stack.' 
                : 'Enter your credentials to access your dashboard.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {state.mode === 'signup' && (
              <>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${state.errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                      placeholder="John Doe"
                      value={state.formData.name}
                      onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
                    />
                  </div>
                  {state.errors.name && <p className="text-xs text-red-500 mt-1">{state.errors.name}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Work Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${state.errors.workEmail ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                        placeholder="john@company.com"
                        value={state.formData.workEmail}
                        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'workEmail', value: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Organization</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${state.errors.orgName ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                        placeholder="Acme Inc"
                        value={state.formData.orgName}
                        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'orgName', value: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Personal Email OPTIONAL */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Personal Email (optional)</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${state.errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  placeholder="hello@example.com"
                  value={state.formData.email}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
                />
              </div>
              {state.errors.email && <p className="text-xs text-red-500 mt-1">{state.errors.email}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${state.errors.password ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  placeholder="••••••••"
                  value={state.formData.password}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })}
                />
              </div>
              {state.errors.password && <p className="text-xs text-red-500 mt-1">{state.errors.password}</p>}
            </div>

            <button
              disabled={state.isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 mt-6 disabled:opacity-70"
            >
              {state.isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {state.mode === 'signup' ? 'Create Account' : 'Sign In'}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              {state.mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => dispatch({ type: 'TOGGLE_MODE' })}
                className="text-blue-600 font-bold hover:underline focus:outline-none"
              >
                {state.mode === 'signup' ? 'Log In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Animation moved slightly higher instead of exact center */}
      <div className="hidden lg:flex lg:w-[55%] bg-slate-900 relative overflow-hidden p-12 items-start">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-2xl mx-auto mt-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-in-out transform ${
                index === activeSlide 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none absolute inset-0'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="mb-8 flex justify-center">
                  <img 
                    src={slide.img} 
                    alt={slide.title} 
                    className="h-64 object-contain drop-shadow-2xl animate-float"
                  />
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-6">
                    {slide.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Indicators */}
          <div className="mt-10 flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeSlide ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default App;
